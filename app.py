from flask import Flask, render_template, request

app = Flask(__name__)

app.static_folder = 'static'

@app.route('/', methods=['GET','POST'])
def stick(): 
    if request.method == 'POST':
        if 'add_field' in request.form:
            model = request.form['model']
            return render_template('save.html', model=model)
        if 'savebtn' in request.form:
            model = request.form['model']
            return render_template('save.html', model=model)
        
        if request.form['appendbtn']=='mp-to-text':
            model = request.form['model']
            prop = request.form['prop']
            result = request.form['model'] + request.form['prop']
            return render_template('save.html', model=model, prop=prop, result=result)
        elif request.form['appendbtn']=='model-to-text':
            model = request.form['model']
            result = model
            prop = request.form['prop']
            return render_template('save.html', model=model, prop=prop, result=result) 
        else:
            prop = request.form['prop']
            result = request.form['prop']
            model = request.form['model']
            return render_template('save.html', model=model, prop=prop, result=result)
            
    else:
        return render_template('save.html')
   
if __name__ == "__main__":
    app.run()


