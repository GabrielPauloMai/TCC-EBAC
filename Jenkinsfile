pipeline {
    agent any
    stages {
        
        stage('Instalar dependências') {
            steps {
                sh 'cd ./automated-tests && npm install'
            }
        }
 
        stage('Executar testes') {
            steps {
                sh 'cd ./automated-tests && npm test'
            }
        }
    }
}
