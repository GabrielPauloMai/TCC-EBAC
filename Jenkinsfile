pipeline {
    agent any
    
    environment {
        CYPRESS_BASE_URL = 'http://lojaebac.ebaconline.art.br' 
    }

    stages {
        
        stage('Instalar dependências') {
            steps {
                ansiColor('css') {
                    sh 'npm install'
                }
            }
        }
 
        stage('Executar testes') {
            steps {
                ansiColor('css') {
                    sh 'cd automated-tests'
                    sh 'npx cypress run"' 
                }
            }
        }

    }

}
