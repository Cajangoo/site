from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, 'dados.db')

# Configuração do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Modelo do usuário
class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    senha = db.Column(db.String(100))

@app.route('/')
def index():
    return redirect(url_for('pagina_cadastro'))

@app.route('/cadastro', methods=['GET', 'POST'])
def pagina_cadastro():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']

        if Usuario.query.filter_by(email=email).first():
            return "E-mail já cadastrado. Utilize outro e-mail."

        senha_hash = generate_password_hash(senha)
        novo_usuario = Usuario(nome=nome, email=email, senha=senha_hash)
        db.session.add(novo_usuario)
        db.session.commit()

        # Redireciona para a página de login após o cadastro
        return redirect(url_for('pagina_login'))

    return render_template('pagina_de_cadastro.html')

@app.route('/login', methods=['GET', 'POST'])
def pagina_login():
    alerta = None
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']

        usuario = Usuario.query.filter_by(email=email).first()

        if usuario and check_password_hash(usuario.senha, senha):
            return redirect(url_for('pagina_inicial'))
        else:
            alerta = "Credenciais inválidas. Por favor, tente novamente."

    return render_template('pagina_de_login.html', alerta=alerta)

@app.route('/inicial')
def pagina_inicial():
    return render_template('pagina_inicial.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Isso cria as tabelas no banco de dados, se não existirem
        app.run(debug=True)
