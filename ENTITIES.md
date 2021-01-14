# Table of Contents  
- [Table of Contents](#table-of-contents)
- [Entities](#entities)
  - [User](#user)
  - [Message](#message)
- [Relationships](#relationships)



# Entities
## User
    properties:
    - firstname
    - lastname
    - username
    - password
    - email

    methods:
    - create
## Message
    properties:
      - title
      - body
      - date
      - parentId?
      - ownerId
  
    methods:
      - create
      - delete

# Relationships
    - A User has many Messages. 
    - A Message belongs to one User.
      - One to Many: required ownerId property in Message entity.
    - A Message can be a reply to one Message.
      - One to One: optional parentId property in Message entity.