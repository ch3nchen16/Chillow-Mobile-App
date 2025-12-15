# Chillow-Mobile-App

A real-estate housing mobile application

### 1. Project Set Up in Google Cloud Console
1. I created a new project called Chillow-Mobile-App

**Steps:** In the top left corner of the Google Cloud Console click **“Select a project” → “New project”**.  
   Take note of the **Project ID** (for example my ID: `chillow-mobile-app-480708`).
2. Set project ID as default:
   ```bash
   gcloud config set project your-project-id
   ```
For example in VS Code: gcloud config set project chillow-mobile-app-480708

3. Make sure billing is enabled

**Steps:** In the top left corner of the Google Cloud Console click **Navigation Menu (3 horizontal lines) → “Billing” (link to a billing account if you still haven't)**.
### 2. Enable Services
This app uses:
- **Google App Engine API** for deployment  
- **Cloud Firestore API** for the database  
- **Identity Toolkit API** (Identity Platform / Firebase Auth) for authentication  
You can run these commands:
   ```bash
   gcloud services enable appengine.googleapis.com
   gcloud services enable firestore.googleapis.com
   gcloud services enable identitytoolkit.googleapis.com
   ```
### 3. Build the App
   ```bash
   ionic build
   ```
We need this because App Engine only serves static files (for example: www/index.html).
It creates www/ folder which is the standard location for app.yaml to find static files.
### 4. Initialise App Engine
   ```bash
   gcloud app create --region=europe-west2
   ```
### 5. Configure app.yaml
app.yaml tells App Engine how to run and serve the app.
1. Create a file called app.yaml in the root of the project.
```yaml
# app.yaml defines how app is run such as handling requests for app deployment for app engine
runtime: nodejs24 #latest version - tells which runtine env to use. Ensures env where Node.js is installed
env: standard # uses standard environment, suitable for simple apps like this. Can run for free, scales to 0 instances when there is no traffic
instance_class: F1 # determines memory and CPU resources and auto scaling. Lowest memory and CPU limit (ex 256 MB memory limit)
# This is only a college project so F1 is suitable, this also keeps costs minimal
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
### 6. Deploy The App
```bash
gcloud app deploy
```
Then validate deployment
```bash
gcloud app browse
```
