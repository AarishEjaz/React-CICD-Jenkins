pipeline {
    agent any
    options{
        skipDefaultCheckout(true)
    }
    stages {

        stage('Clean up code'){
            steps {
                cleanWs()
            }
        }

        stage('checkout using SCM'){
            steps{
                checkout scm
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
        stage('test'){
            agent{
                docker{
                    image 'node:18-alpine'
                    args '-u root'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    npm run test
                    test -f dist/index.html
                '''
            }
        }
    }
}


