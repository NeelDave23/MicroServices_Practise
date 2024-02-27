/**
 * @swagger
 * /users/admin :
 *      post:
 *           summary: Admin Login Request
 *           description: Post Login Request   
 *           tags:  
 *             - Admin          
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
 *                               task_count:
 *                                 type: integer
 *                               tasks:
 *                                 type: array
 *                                 items:
 *                                   type: string 
 *                               user:
 *                                 type: array
 *                                 items:
 *                                   type: integer 
 *                               user_count:
 *                                 type: integer
 *                               user_name:
 *                                 type: array
 *                                 items:
 *                                   type: string 
 *                               all_usersbyid:
 *                                 type: integer

 *                401:
 *                   description: Unauthorized 
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
  */

/**
 * @swagger
 * /users/admin/{id} :
 *      get:
 *           summary: View User  
 *           description: View User Request   
 *           tags:  
 *             - Admin          
 *           parameters:
 *              - name: id
 *                in: path
 *                description: User ID
 *                required: true
 *                schema:
 *                  type: string                 
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               users_id:
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
 *                               
 *                              
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                401:
 *                   description: Unauthorized 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Not a Authorized user

 * 
              
 *                   
  */

/**
 * @swagger
 * /users/admin/deleteuser :
 *      post:
 *           summary: Delete User Request
 *           description: Delete User Request   
 *           tags:  
 *             - Admin          
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: array
 *                          items:
 *                            type: string  
 *                          example:
 *                            user_id: 
 *                             - "User ID 1"
 *                             - "User ID 2"         
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: integer
 *                                 default: Deleted
 *                                
 *                                                              
 *                              
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: User Not Exist in DB
 *                401:
 *                   description: Unauthorized 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Not a Authorized user

 * 
              
 *                   
  */

/**
 * @swagger
 * /users/admin/deletealluser :
 *      get:
 *           summary: Delete All users Request
 *           description: Delete All users Request   
 *           tags:  
 *             - Admin          
 *                    
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: All users are deleted from DB
 *                                
 *                                                              
 *                              
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: No User found in DB
 *                401:
 *                   description: Unauthorized 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Not a Authorized user

 * 
              
 *                   
  */

/**
 * @swagger
 * /users/admin/{id}/deletetask:
 *      post:
 *           summary: Delete Task Request
 *           description: Delete Task Request   
 *           tags:  
 *             - Admin  
 *           parameters:
 *             - name: id
 *               in: path
 *               description: User ID
 *               required: true
 *               schema:
 *                  type: string        
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                             type: object
 *                             properties:
 *                               task_id:
 *                                 type: string
 *                                 default: Task ID              
 *           responses:
 *                 200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: integer
 *                                 default: Deleted
 *                                
 *                                                              
 *                              
 *                 404:
 *                   description: Not Found.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                 400:
 *                   description: Not Found.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                 401:
 *                   description: Unauthorized 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Not a Authorized user

 * 
              
 *                   
  */

/**
 * @swagger
 * /users/admin/{id}/deletealltask:
 *      get:
 *           summary: Delete All the Task of a User Request
 *           description: Delete All the Task of a User Request   
 *           tags:  
 *             - Admin  
 *           parameters:
 *             - name: id
 *               in: path
 *               description: User ID
 *               required: true
 *               schema:
 *                  type: string        
 *              
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: integer
 *                                 default: Deleted
 *                                                                                           
 *                              
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                404:
 *                   description: Not Found.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                401:
 *                   description: Unauthorized 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Not a Authorized user

 * 
              
 *                   
  */

/**
 * @swagger
 * /users/admin/delete:
 *      get:
 *           summary: Delete All the Task   Request
 *           description: Delete All the Task   Request   
 *           tags:  
 *             - Admin  
 *                         
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: integer
 *                                 default: Deleted
 *                                                                                           
 *                              
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                404:
 *                   description: Not Found.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                401:
 *                   description: Unauthorized 
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Not a Authorized user

 * 
              
 *                   
  */
