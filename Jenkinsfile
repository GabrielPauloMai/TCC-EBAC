pipeline {
    agent any

    stages {
        
        stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }
 
        stage('Executar testes') {
            steps {
                sh 'npx run test'
            }
        }
    }
}
