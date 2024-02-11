from flask import Flask, render_template, request
from flask_mysqldb import MySQL
from config import Config  # Import the configuration class

app = Flask(__name__)
app.config.from_object(Config)  # Load configuration from the Config class

mysql = MySQL(app)

@app.route('/', methods=['GET', 'POST'])
def abc():
    if request.method == 'POST':
        try:
            costomerName = request.form['costomerName']
            email = request.form['email']
            product = request.form['product']
            message = request.form['message']

            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO sam(costomerName, email, product, message) VALUES(%s, %s, %s, %s)",
                (costomerName, email, product, message))
            mysql.connection.commit()
            cur.close()
            # return "INSERTED SUCCESSFULLY !!"
        except Exception as e:
            # Handle the error, log it, and return an error message
            error_message = f"Error: {str(e)}"
            return error_message
    return render_template('contactForm.html')

if __name__ == '__main__':
    app.run(debug=True)
