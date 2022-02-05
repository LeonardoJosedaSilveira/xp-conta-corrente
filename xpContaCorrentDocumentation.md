# API xp-conta-corrente-api

http://localhost:3000

- - -
>**`POST /account`** 
```
Registra uma conta com valor incial de 0.

retorna
- status 201 - created
{
  "id": 10
}

```
- - -
>**`POST /bank-transition/credit/2`** 
```
Credita o valor na conta que possui o ID passado como parametro.
No BODY é enviado um JSON com os seguintes campos.
{
  "value":  10000,
  "origin": "banco-agencia-conta-titular"
}

retorna
- status 201 - created
{
  "message": "The amount of 10000 has been added to account 2"
}


- status 400 - bad request
{
  "statusCode": 400,
  "message": "Account not exist",
  "error": "Bad Request"
}

- status 400 - bad request
{
  "statusCode": 400,
  "message": "Invalid value",
  "error": "Bad Request"
}
```
- - -
>**`POST /bank-transition/debit/2`** 
```
Debita o valor na conta que possui o ID passado como parametro.
No BODY é enviado um JSON com os seguintes campos.
{
  "value":  5000,
  "origin": "boleto"
}

retorna
- status 201 - created
{
  "message": "The amount of 5000 was debited from account 2"
}


- status 400 - bad request
{
  "statusCode": 400,
  "message": "Account not exist",
  "error": "Bad Request"
}

- status 400 - bad request
{
  "statusCode": 400,
  "message": "Invalid value",
  "error": "Bad Request"
}

- status 400 - bad request
{
  "statusCode": 400,
  "message": "insufficient funds",
  "error": "Bad Request"
}
```
- - -
>**`GET /bank-transition/extract/3`** 
```
Retorna o extrato de movimentação na conta que possui o ID passado como parametro, em ordenação de descendente por data.

retorna
- status 200 - OK
{
  "bankTransition": [
    {
      "origin": "boleto",
      "type": "DEBIT",
      "value": 100,
      "date": "2022-02-05T06:20:02.146Z"
    },
    {
      "origin": "banco-agencia-conta-titular",
      "type": "CREDIT",
      "value": 500,
      "date": "2022-02-05T06:19:36.640Z"
    }
  ]
}


- status 400 - bad request
{
  "statusCode": 400,
  "message": "Account not exist",
  "error": "Bad Request"
}
```
- - -
>**`GET /bank-transition/balance/3`** 
```
Retorna o valor atual disponivel na conta que possui o ID passado como parametro.

retorna
- status 200 - OK
{
  "balance": 400
}


- status 400 - bad request
{
  "statusCode": 400,
  "message": "Account not exist",
  "error": "Bad Request"
}
```
- - -