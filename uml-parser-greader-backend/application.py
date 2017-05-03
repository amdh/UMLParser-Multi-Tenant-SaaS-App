import boto
import json
import subprocess


application = Flask(__name__)
application.config['UPLOAD_FOLDER'] = 'uploads/'


@application.route("/ping"):
def ping():
	console.log('ping me')
	return json.dumps({"hello":"world"})


@application.route("/upload", methods=['POST']):
def upload():
	console.log('upload file')
	file = request.files['file']
	filename = secure_filename(file.filename)
        # Move the file form the temporal folder to
        # the upload folder we setup
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # Redirect the user to the uploaded_file route, which
        # will basicaly show on the browser the uploaded file
    #return redirect(url_for('uploaded_file',
                                filename=filename))
	
	subprocess.call(['java', '-jar', 'StatsCalc.jar'],shell=True)