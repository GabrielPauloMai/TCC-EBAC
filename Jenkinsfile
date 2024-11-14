pipeline {
    agent any

    stages {
        
        stage('Instalar dependências') {
            steps {
                ansiColor('css') {
                    sh '''
                        cd automated-tests
                        npm install
                    '''
                }
            }
        }
 
        stage('Executar testes') {
            steps {
                ansiColor('css') {
                    sh '''
                        cd automated-tests
                        npm test
                    '''
                }
            }
        }

    }

}