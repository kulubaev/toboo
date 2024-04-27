--
--
insert into users (id, secret,  email)
       values(${id},${secret},  ${email});

RETURNING *
