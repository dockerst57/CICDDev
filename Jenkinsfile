pipeline {
    agent any

     stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
     }
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-credentials', url: 'https://github.com/dockerst57/CICDDev.git',branch:'main'
            }
        }
        stage('Restore') {
            steps {
                sh 'dotnet restore'
            }
        }
        stage('Build') {
            steps {
                sh 'dotnet build --configuration Release'
            }
        }
       
        stage('Publish') {
            steps {
                sh 'dotnet publish --configuration Release --output ./publish'
            }
        }
    }
}
