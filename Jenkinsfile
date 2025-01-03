pipeline {
    agent any
    stages {

        statge('Clean up code'){
            steps {
                cleansWs()
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root'
                    reuseNode true // this will reuse the node for next stages
                }
            }
            steps {
                    sh '''
                    ls -l
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -l
                '''
            }
        }
    }
}

//add npm run build in the sh step

