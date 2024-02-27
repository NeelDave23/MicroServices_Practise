/**
 * @swagger
 * /users/signup :
 *      post:
 *           summary: SignUp Request
 *           description: Post Signup Request 
 *           tags:  
 *             - Authentication
 *             
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            name:
 *                                type: string
 *                                default: Name
 *                            email:
 *                                type: string
 *                                default: Email Address
 *                            password:
 *                                type: string
 *                                default: Password
 *                            confirm_password:
 *                                type: string 
 *                                default: Confirm Password                    

 *           responses:
 *                201:
 *                   description: Account Created Successfully.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               name:
 *                                 type: string
 *                                 default: Name
 *                               email:
 *                                 type: string
 *                                 default: Email Address
 *                               tasks:
 *                                 type: string
 *                                 default: Tasks 
 *                               task_count:
 *                                 type: integer
 *                                 default: Task Count 
 *                               user_id:
 *                                 type: integer
 *                                 default: User ID
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Missing Values
 *                401:
 *                   description: Email Already Register 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               meaage:
 *                                 type: string
 *                                 default: Email Already Register, Please Login
 * 
              
 *                   
  */

/**
 * @swagger
 * /users/login :
 *      post:
 *           summary: Login Request
 *           description: Post Login Request   
 *           tags:  
 *             - Authentication           
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            email:
 *                                type: string
 *                            password:
 *                                type: string                 
 *           responses:
 *                200:
 *                   description: Login Successfully.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               name:
 *                                 type: string
 *                               email:
 *                                 type: string
 *                               tasks:
 *                                 type: array
 *                                 items:
 *                                   type: string 
 *                               task_count:
 *                                 type: integer
 *                               user_id:
 *                                 type: integer
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Missing Value
 *                401:
 *                   description: Email not Register 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Email not Register, Please SignUp First.

 * 
              
 *                   
  */
