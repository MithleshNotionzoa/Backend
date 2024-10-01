import { define } from 'typeorm-seeding';
import { randUserName, randEmail, randPhoneNumber, randPassword } from '@ngneat/falso';
import { User } from '../../auth/user/entities/user.entity';

define(User, () => {
    const user = new User();
    user.name = randUserName();
    user.email = randEmail();
    user.phone_number = randPhoneNumber();
    user.password = randPassword();
    console.log("log user", user)
    return user;
});
