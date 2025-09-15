    CREATE TABLE roles (
        id BIGINT NOT NULL AUTO_INCREMENT,
        name VARCHAR(60) NOT NULL,
        PRIMARY KEY ( id )
    ) ENGINE = InnoDB CHARACTER SET utf8;
     
    CREATE TABLE users_roles (
        user_id BIGINT NOT NULL ,
        role_id BIGINT NOT NULL
    ) ENGINE = InnoDB CHARACTER SET utf8;
     
    ALTER TABLE roles
    ADD CONSTRAINT UK_roles_name
    UNIQUE (name);
     
    ALTER TABLE users_roles
    ADD CONSTRAINT UK_user_id_roles_id
    UNIQUE (user_id, role_id);
     
    ALTER TABLE users_roles
    ADD CONSTRAINT FK_users_roles_roles_id
    FOREIGN KEY (role_id) REFERENCES roles(id);
     
    ALTER TABLE users_roles
    ADD CONSTRAINT FK_users_roles_user_id
    FOREIGN KEY (user_id) REFERENCES users(id);