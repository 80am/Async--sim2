module.exports={

    uLogin: (req, res) => {
        console.log("Login", req.body.userName, req.body.passWord)
        var {userName,passWord}=req.body
        const db=req.app.get('db')
        db.userlogin([userName, passWord])
            .then((user)=>{
                console.log("this user 0 ", user[0])
                if(user[0]){
                    console.log('userfound')
                    req.session.user = user[0]
                    res.sendStatus(200)
                    console.log('on session', req.session)
                }else{
                    console.log('no user found')
                    res.sendStatus(401)
                }

             })
        
    },
    
    userData: (req, res, next)=>{
        var {users_id} = req.session.user
        // console.log(users_id)
        const db=req.app.get('db')
        db.listings([users_id])
        .then((homes) => {
            console.log('homes =',homes)
            res.status(200).send(homes)
        })
    },

    filterInfo: (req, res) =>{
        // console.log(req.session)

        var {users_id} = req.session.user
        console.log( req.body.filter)
        const db = req.app.get('db')
        db.filter([ users_id, req.body.filter ])
        .then((filterhomes)=>{
            res.status(200).send(filterhomes)
        })
    },
    userregister: (req, res) =>{
        var {userName, passWord}=req.body
        const db=req.app.get('db')
        db.registeruser([userName, passWord])
        .then((user)=>{
            // console.log("the user is ", user[0].username, user[0].password)
            if(user[0]){
                console.log('userfound')
                req.session.user = user[0]
                res.sendStatus(200)
                console.log('on session', req.session)
            }else{
                console.log('no user found')
                res.sendStatus(401)
            }

        })
    },
    userComplete: (req, res) => {
        // var {users_id} = req.session.user
        // console.log("user1111: ", req.session.user)
        const db=req.app.get('db')
        db.complete([req.body.name, 
                    req.body.loan,
                    req.body.mortgage, 
                    req.body.recRent, 
                    req.body.dRent, 
                    req.body.address, 
                    req.body.city, 
                    req.body.state, 
                    req.body.zip, 
                    req.body.description, 
                    req.body.image, 
                    req.body.dRents, 
                    req.session.user.users_id])
        .then((newInventory)=>{console.log(newInventory)
            // res.status(200).send(newInventory)
        })
    },

    deleteStuff: (req, res)=>{
        console.log( "this is the params: ", req.params.id)
        const db = req.app.get('db')
        db.delete([ req.params.id ])
        .then((afterDelete)=>{
            res.status(200).send(afterDelete)
        })
    }
}


// .then(listings=> res.Status(200).send(listings))

