# Chillow-Mobile-App

A real-estate housing mobile application

### 1. Project Set Up in Google Cloud Console

1. I created a new project called Chillow-Mobile-App

**Steps:** In the top left corner of the Google Cloud Console click **“Select a project” → “New project”**.  
 Take note of the **Project ID** (for example my ID: `chillow-mobile-app-480708`). 2. Set project ID as default:

```bash
gcloud config set project your-project-id
```

For example in VS Code: gcloud config set project chillow-mobile-app-480708

3. Make sure billing is enabled

**Steps:** In the top left corner of the Google Cloud Console click **Navigation Menu (3 horizontal lines) → “Billing” (link to a billing account if you still haven't)**.

### 2. Enable Services

This app uses:
- **Cloud Build API** to execute builds in Google Cloud
- **Google App Engine API** for deployment
- **Cloud Firestore API** for the database
- **Identity Toolkit API** (Identity Platform / Firebase Auth) for authentication  
  You can run these commands:
  ```bash
  gcloud services enable cloudbuild.googleapis.com
  gcloud services enable appengine.googleapis.com
  gcloud services enable firestore.googleapis.com
  gcloud services enable identitytoolkit.googleapis.com
  ```
You can also check in the Google Cloud Console to see if they are enabled.
### 3. Initialise App Engine

```bash
gcloud app create --region=europe-west2
```
This creates a new app engine application in the project and specifies where it will live.

### 4. Configure app.yaml

app.yaml tells App Engine how to run and serve the app.

1. Create a file called app.yaml in the root of the project.

```yaml
# app.yaml defines how the app is run such as handling requests for app deployment
runtime: nodejs24 #latest version - tells which runtime env to use. NodeJs = Open source Javascript environment.
#runtime env = contains a collection of software services and resources for example memory allocation to support the project's execution.
instance_class: F1 # determines memory and CPU resources and auto scaling. Lowest memory and CPU limit (ex 256 MB memory limit)
# This is only a college project so F1 is suitable, this also keeps costs minimal
env: standard # uses standard environment, suitable for simple apps like this. Can run for free, scales to 0 instances when there is no traffic. (Other environment type is 'flexible' which is more suited for complex projects (more costs as its minimum number of instances is 1)).
service: default #specifies which service the configuration runs on, default = main service for the project

# defines routing (how app eng serves files when users visit URLs). Tells how to handle incoming HTTP requests
handlers:
  - url: /(.*\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map)) # matching any request with files ending with these
    static_files: www/\1 # \1 references the first capture group which means it maps directly to the requested file name.
    upload: www/.*\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map) # which files to include when uploading to app eng

  # any requests to /assets serves files from www/assets (serves directory intead of individual files)
  - url: /assets
    static_dir: www/assets

  # Serve all other files and URLs through index.html (lets Angular handle the
  # routing because app eng doesn't know all the URLs for example when user visits route /booking app eng doesn't know what file that corresponds to)
  - url: /.*
    static_files: www/index.html
    upload: www/index.html

automatic_scaling: #automatically adjusts number of instances based on traffic
  max_concurrent_requests: 60 # The number of concurrent requests an auto scaling instance can accept before making a new instance
  target_cpu_utilization: 0.65 # target: average 65% CPU usage to handle traffic. Over 65% a new instance will be started
  target_throughput_utilization: 0.75 # max_concurrent_requests (60) x target_throughput_utilization (0.75) = 45 concurrent requests
  # when it reaches 45 concurrent requests it will create a new instance
  #When the number of concurrent requests reaches a value equal to max_concurrent_requests times target_throughput_utilization, the scheduler tries to start a new instance.
  max_instances: 2 #maximum 2 instances, still developing the project, this keeps costs minimal

# app is running in production environment inside NodeJs runtime, tells libraries (Angular, Ionic, Firebase, etc...) to run in production mode
# for our live app demo
env_variables:
  NODE_ENV: production
```

### 5. Configure cloudbuild.yaml

Cloud Build Service allows you to execute your builds on Google Cloud

1. Create a cloudbuild.yaml file in the root of your app.

```yaml
steps:
  # Step 1: Install dependencies
  - name: "node:22" #tells cloud build to run this step in Docker's node 22 image. This image comes with Node.js and nom installed so no need to install
    entrypoint: "npm" #when container starts run npm
    args: ["install"] #arguments passed to entrypoint = npm install

  # Step 2: ng build (creates www/ folder)
  - name: "node:22"
    entrypoint: "npm"
    args: ["run", "build"] # runs npm run build -> npm looks up build script in package.json ("build": "ng build") and runs it
    #this creates the www/ folder with files for app engine to deploy. #why do we need this?, ionic source code is not "browser-ready",
    #this compiles the typescript, SCSS, etc. files to browser-ready HTML, CSS and JS files for app engine to deploy

  # Step 3: Deploy to Google App Engine
  - name: "gcr.io/cloud-builders/gcloud" #tells cloud build to run Google's official cloud build builder image for gcloud CLI
    args: ["app", "deploy", "--quiet"] #--quiet disables prompts for ex ... Continue? (y/N)
    #runs gcloud app deploy which looks for app.yaml (blueprint for running and serving the app)

options:
  logging: CLOUD_LOGGING_ONLY #tells cloud build to send all build logs only to Cloud Logging (GCP Log Service)
timeout: "900s" #15 mins - if build takes longer than 15 mins, cloud build will stop it and mark it as failed. (note: build = when the source
# code is being prepared for deployment )
```

Note: In package.json file make sure it has "build": "ng build"!
ng build creates www/ folder which is the standard location for app.yaml to find static files.
Why do we need this?
Answer: App Engine serves "browser-ready" files (for example: www/index.html). ng build turns the source code (typescript files, scss) into "browser-ready" (HTML, CSS, Javascript) files which App Engine can then find in www/ folder and deploy it on the browser.

### 5. Add .angular/cache in the .cloudignore file

I received an error because too many files were in my .angular/cache directory. To fix this I added it to .cloudignore because we don't need this for deployment.

### 6. Run Cloud Build

```bash
gcloud builds submit --config cloudbuild.yaml .
```

--config cloudbuild.yaml :specifies the build configuration file to use and the dot at the end just means in this current directory.
This will run all the steps: npm install, ng build, gcloud app deploy.

## (Optional). Create a Trigger For Cloud Build so that it starts to run when you do git push

1. **“Cloud Build” → “Triggers” → “Create Trigger”**
2. Select these options **“Event: Push to branch” → “Source: Cloud Build Repositories” → “Repository Generation: 1st Gen” → “Configuration: Cloud Build configuration file (yaml or json), Location: Repository, Cloud Build configuration file location: cloudbuild.yaml”**

### 7. Visit your deployed app on the browser to validate deployment

```bash
gcloud app browse
```
