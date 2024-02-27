/**
 * @swagger
 * /orders/{id} :
 *      get:
 *           summary: View Tasks
 *           description: Get Tasks Request
 *           tags:  
 *             - Tasks   
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
 *                             type: array
 *                             items:
 *                              type: string
 *                             example: 
 *                                 - "Task 1"
 *                                 - "Task 2"
 *                                
 *                                  
 *                                  
 *                                 
 *                                  
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
 * /orders/{id} :
 *      post:
 *           summary: Add Tasks
 *           description: Add Tasks Request
 *           tags:  
 *             - Tasks
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: array
 *                          items:
 *                            type: string  
 *                          example:
 *                            task: 
 *                             - "Task 1"
 *                             - "Task 2"
 *                             
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
 *                               message:
 *                                 type: string
 *                                 default: Task Added Successfully      
 *                                
 *                                  
 *                400:
 *                   description: Bad Request
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message                  
 *                                 
 *                                  
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
 * /orders/{id}/deletetask :
 *      post:
 *           summary: Delete Tasks
 *           description: Delete Tasks Request
 *           tags:  
 *             - Tasks
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: array
 *                          items:
 *                            type: string  
 *                          example:
 *                            task: 
 *                             - "Task 1"
 *                             - "Task 2"
 *                             
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
 *                               message:
 *                                 type: string
 *                                 default: Task Removed Successfully      
 *                                
 *                                  
 *                400:
 *                   description: Bad Request
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message                  
 *                                 
 *                                  
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
 * /orders/{id}/updatetask :
 *      post:
 *           summary: Update Tasks
 *           description: Update Tasks Request
 *           tags:  
 *             - Tasks
 *           requestBody:
 *                required: true    
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            old_task:
 *                                type: string
 *                            new_task:
 *                                type: string   
 *                             
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
 *                               message:
 *                                 type: string
 *                                 default: Task Updated Successfully      
 *                                
 *                                  
 *                400:
 *                   description: Bad Request
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message                  
 *                                 
 *                                  
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
 * /orders/{id}/deletealltask :
 *      get:
 *           summary: Update Tasks
 *           description: Update Tasks Request
 *           tags:  
 *             - Tasks
 *                                        
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
 *                               message:
 *                                 type: string
 *                                 default: Task Removed Successfully      
 *                                
 *                                  
 *                400:
 *                   description: Bad Request
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               message:
 *                                 type: string
 *                                 default: Message                  
 *                                 
 *                                  
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
