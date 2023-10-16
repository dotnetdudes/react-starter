# Docker

Deployment. There is a basic implementation of dockerising the react application with Nginx.  

## Deployment

A basic Nginx deployment is included. This is only for **http**, port 80. THe implementation of **https** is left to each project to implement according to their own requirements.

There is a **Dockerfile** in the website root which will build the Nginx container. There is also a **docker-compose-prod.yml** file which provides some configuration.

### Use

To use the production docker image you should first edit the **docker-compose-prod.yml** file and change the *container* and *image* properties to match your project.

Https and SSL should be configured according to your requirements. (Optional)  

#### Build
The Docker image can be built by running ```docker-compose -f docker-compose-prod.yml build```.

You can run the image directly or push to a container registry. For example ```docker run -p 80:80 --name dotnetdudes-react-prod```. This example uses the default image name from the *docker-compose-prod.yml* file.  