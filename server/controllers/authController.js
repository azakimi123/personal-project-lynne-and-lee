const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {email, username, password} = req.body;
        const db = req.app.get('db');


        //check email exists
        const foundUser = await db.users.check_user({email});
        if (foundUser[0]) {
            return res.status(400).send('An account with this email already exists')
        }

        //hash password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        //register new user
        const newUser = await db.users.register_user({username, email, hash});
        req.session.user = newUser[0];
        console.log(req.session.user)
        res.status(201).send(req.session.user);
        console.log('new account registered!')

    },

    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');

        //check if user exists
        const foundUser = await db.users.check_user({email});
        const user = foundUser[0];
        req.session.user = user;
        // console.log(user.user_password)
        if(!user) {
            return res.status(400).send('email is not associated with an account, please register')
        }  
        //login in user
        else {
            const isAuthenticated = bcrypt.compareSync(password, user.user_password);
            if (!isAuthenticated || user === undefined) {
                console.log(user)
                res.status(403).send('Incorrect Email/Password');
            } else {
                delete user.password;
                res.status(200).send(req.session.user);
                console.log('you are logged in!')
                }
            }
        },

    logout: (req, res) => {
        console.log('log out worked')
        req.session.destroy();
        res.sendStatus(200)
        }
        
    }