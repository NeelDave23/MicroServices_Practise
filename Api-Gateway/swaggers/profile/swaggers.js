/**
 * @swagger
 * /profile/{id} :
 *      get:
 *           summary: Profile Request
 *           description: Get Profile Details
 *           tags:  
 *             - Profile   
 *           parameters:
 *              - name: id
 *                in: path
 *                description: User ID
 *                required: true
 *                schema:
 *                  type: string
                  

 *           responses:
 *                200:
 *                   description:  Success.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               user_id:
 *                                 type: integer
 *                               name:
 *                                 type: string
 *                               email:
 *                                 type: string
 *                               position:
 *                                 type: string
 *                               created_at:
 *                                 type: string
 *                               updated_at:
 *                                 type: string
 *                               last_login:
 *                                 type: string
 *                               tasks:
 *                                 type: array
 *                                 items:
 *                                   type: string 

 *                404:
 *                   description: User Not Found.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: User Not Found
 * 
 *                401:
 *                   description: Unauthorized User
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Unauthorized User
 *                
 * 
              
 *                   
  */

/**
 * @swagger
 * /profile/{id} :
 *      post:
 *           summary: Update Profile
 *           description: Update Profile Post Request 
 *           tags:  
 *             - Profile     
 *           parameters:
 *              - name: id
 *                in: path
 *                description: User ID  
 *                required: true
 *                schema:
 *                  type: string
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            name:
 *                                type: string
 *                            email:
 *                                type: string
                  

 *           responses:
 *                200:
 *                   description:  Success
 *                   content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Profile Update Successfully.
 * 
 *                   
 *                400:
 *                   description: Bad request.
 *                   content:
 *                     application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Missing Values
 *                401:
 *                   description: Unauthorized User
 *                   content:
 *                     application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Unauthorized User
 *                
 * 
              
 *                   
  */

/**
 * @swagger
 * /profile/{id}/deleteuser :
 *        get:
 *           summary: Delete User
 *           description: Delete User Request 
 *           tags:  
 *             - Profile     
 *           parameters:
 *              - name: id
 *                in: path
 *                description: User ID  
 *                required: true
 *                schema:
 *                  type: string                

 *           responses:
 *                200:
 *                   description:  Success
 *                   content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: User Deleted Successfully.
 *                    
 *                401:
 *                   description: Unauthorized User
 *                   content:
 *                     application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Unauthorized User
 *                
 * 
              
 *                   
  */

/**
 * @swagger
 * /profile/{id}/changepassword :
 *        get:
 *           summary: Change Password
 *           description: Change Password Request
 *           tags:  
 *             - Profile      
 *           parameters:
 *              - name: id
 *                in: path
 *                description: User ID  
 *                required: true
 *                schema:
 *                  type: string                

 *           responses:
 *                200:
 *                   description:  Success
 *                   content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Password Reset Link Send to Email.
 *                    
 *                401:
 *                   description: Unauthorized User
 *                   content:
 *                     application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Unauthorized User
 *                
 * 
              
 *                   
  */

/**
 * @swagger
 * /profile/{id}/{token} :
 *        post:
 *           summary: Change Password
 *           description: Change Password Request
 *           tags:  
 *             - Profile      
 *           parameters:
 *              - name: id
 *                in: path
 *                description: User ID  
 *                required: true
 *                schema:
 *                  type: string  
 *              - name: token 
 *                in: path
 *                description: Token 
 *                required: true
 *                schema:
 *                  type: string              

 *           responses:
 *                200:
 *                   description:  Success
 *                   content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Password Changed Successfully
 *                    
 *                401:
 *                   description: Unauthorized User
 *                   content:
 *                     application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            message:
 *                                type: string
 *                                default: Unauthorized User
 *                
 * 
              
 *                   
  */
