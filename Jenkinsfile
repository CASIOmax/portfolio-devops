pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/CASIOmax/portfolio-devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                   docker.build('portfolio-app:latest', '--no-cache .')
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Stop old container if exists
                    sh "docker rm -f portfolio-app || true"
                    // Run new container
                    sh "docker run -d --name portfolio-app -p 3000:3000 portfolio-app:latest"
                }
            }
        }
    }
}
