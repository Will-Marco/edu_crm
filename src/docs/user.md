#### 1. User Sign In Post Endpoint

##### Request

`SERVER_URL/users/sign_in`

Headers:
`Content-Type: "application/json"`
`Authorization: "Token"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| username | User's username (5, 32, unique) | String | true |
| password | User's password (5, 128) | String | true |

#### 2. User GET Endpoint

`SERVER_URL/users/`

Headers:
`Content-Type: "application/json"`
`Authorization: "Token"`

##### Response status codes

`201 - Token created successfully`

`400 - Username || Password is incorrect`

`500 - Internal Server Error`
