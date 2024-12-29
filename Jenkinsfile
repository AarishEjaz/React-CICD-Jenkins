pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
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

// pipeline {
//     agent any
//     stages {
//         stage('Hello') {
//             steps {
//                 script {
//                     bat 'echo Hello World'
//                 }
//             }
//         }
//     }
// }
