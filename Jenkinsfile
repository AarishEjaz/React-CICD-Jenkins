pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root'
                    reuseNode true // this will reuse the node for next stages
                }
            }
            steps {
                step('clean up workspace') {
                    cleanWs()
                }

                step('build project'){
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
}

//add npm run build in the sh step

