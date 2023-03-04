pipeline {
    agent {
        docker { image 'node:16.19' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            environment {
                COMMIT_MESSAGE = sh(returnStdout: true, script: 'git log -1 --pretty=%B').trim()
            }
            steps {
                sh 'npm install wrangler'
                withCredentials([string(credentialsId: '1ce86dad-1224-4efe-b29e-7b2e6191bf9b', variable: 'CLOUDFLARE_API_TOKEN')]) {
                    sh 'CLOUDFLARE_ACCOUNT_ID=073409c1e68d65ff785a7d0056db2c17 \
                        npx wrangler pages publish build \
                            --project-name nootsponge-web \
                            --branch ' + env.GIT_BRANCH + ' \
                            --commit-hash ' + env.GIT_COMMIT + ' \
                            --commit-message "' + env.COMMIT_MESSAGE + '"'
                }
            }
        }
    }
}