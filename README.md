## PRE:
1. setup local postgreSQL db as : https://www.theodinproject.com/lessons/nodejs-using-postgresql
2. database name as : top_users
3. role , password as : admin1
4. inside top_users database : create table with name of usernames with 2 columns, i.e. id and username
5. update postgresSQL connection string inside .env

**.env files is attached here to show how PostgreSQL-connection string looks like**

## Then

1. ```npm install```

2. populated the DB with command :

    ``` node ./db/populatedb```

3. start Express server

    ``` npm run serverstart ```

### SELECT * FROM usernames
4. visit http://localhost:3000/

### insert new row : INSERT INTO usernames (username) VALUES (\<values>)

5. visit http://localhost:3000/new

### search like sql : SELECT * FROM usernames WHERE username LIKE %A%
6. visit http://localhost:3000/?search=A  

### delete all rows in a table : DELETE FROM usernames
7. visit http://localhost:3000/delete

after delete all, backto step 2 to populate again


