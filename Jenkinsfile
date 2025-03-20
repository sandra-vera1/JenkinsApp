pipeline {
    agent any
    
    //environment{
       // NETLIFY_SITE_ID = '0e7ea4c4-adf0-4cf4-a957-4308cfaa2cf8'
       // NETLIFY_AUTH_TOKEN = credentials('myToken')
    //}
    stages {
       /* stage('Docker'){
           steps{
             sh 'docker build -t my-docker-image .'
           }
        }
        stage('Build') {
            agent {
                docker { 
                    image 'node:22.14.0-alpine' 
                    reuseNode true
                }
            }
            
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Test') {
            agent {
                docker { 
                    image 'node:22.14.0-alpine' 
                    reuseNode true
                }
            }
            
            steps {
                sh '''
                   test -f build/index.html
                   npm test
                '''
            }
        }*/

        stage('Deploy') {
            agent {
                docker { 
                    //image 'node:22.14.0-alpine' 
                    //image 'my-docker-image'
                    image 'amazon/aws-cli'
                    reuseNode true
                }
            }
            
            steps {
                withCredentials([usernamePassword(credentialsId: 'my-aws-jenkins', passwordVariable: 'AWS_SECRET_ACCESS_KEY', usernameVariable: 'AWS_ACCESS_KEY_ID')]) {
    // some block
}
                sh '''
                   # npm install netlify-cli
                   # node_modules/.bin/netlify --version
                   # echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                   # node_modules/.bin/netlify status
                   # node_modules/.bin/netlify deploy --prod --dir=build

                  #### custom docker image ####
                  # netlify --version
                  # echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                  # netlify status
                  # netlify deploy --prod --dir=build

                  aws --version
                  aws s3 ls
                '''
            }
        }
    }
}