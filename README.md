## Express server with PostgreSQL database

```Use Knex.js, A SQL Query Builder for Javascript```

### ADD MIGRATIONS
``` development ==> knex migrate:make 01_migration_name```\
``` production ==> knex migrate:make 01_migration_name --env production ``` 


### RUN MIGRATIONS
```development ==> knex migrate:latest ```\
```production ==> knex migrate:latest --env production```

### ROLLBACK 
```development ==> knex migrate:rollback```\
```production ==> knex migrate:rollback --env production```


## ADD SEEDS
```development ==> knex seed:make 01_seed_name```\
```production ==> knex seed:make 01_seed_name --env production ```

## RUN SEED
``` development ==> knex seed:run```\
``` production ==> knex seed:run --env production```


