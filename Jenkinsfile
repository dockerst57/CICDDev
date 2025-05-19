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
                bat 'dotnet restore'
            }
        }
        stage('Build') {
            steps {
                bat 'dotnet build --configuration Release'
            }
        }
       
        stage('Publish') {
            steps {
                bat 'dotnet publish --configuration Release --output ./publish'
            }
        }
    }
}
