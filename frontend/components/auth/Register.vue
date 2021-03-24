<template>
    <div id="register">

    </div>    
</template>

<script>
export default {
    data() {
        return { 
            form: {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
            },
            validations: {
                name: {
                    valid: true,
                    message: ''
                },
                email:  {
                    valid: true,
                    message: ''
                },
                password:  {
                    valid: true,
                    message: ''
                },
                confirm_password:  {
                    valid: true,
                    message: ''
                },
            }
        }

    },

    validateRegistration() {
        if (this.form.name == '') {
            this.validations.name.valid = false;
            this.validations.name.message = 'A name is required on field';
        } else {
            this.validations.name.valid = true;
            this.validations.name.message = '';
        }

        if (this.form.email == '' || !this.form.email.match(/^(([^<>()[\]\\.,;:\s@\"](\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)[a-zA-Z]{2,}))$/)) {
            this.validations.email.valid = false;
            this.validations.email.message = 'A valid email address must be entered to register';
        } else {
            this.validations.email.valid = true;
            this.validations.email.message = '';
        }

        if (this.form.password == '' || this.passwordStrength.score < 4) {
            this.validations.password.valid = false;
            this.validations.password.message = 'Please enter a more secure password';
        } else {
            this.validations.password.valid = true;
            this.validations.password.message = '';
        }

        if (this.form.confirm_password == '' || this.form.confirm_password != this.form.password) {
            this.validations.confirm_password.valid = false;
            this.validations.confirm_password.message = 'Your password must match';
        } else {
            this.validations.confirm_password.valid = true;
            this.validations.confirm_password.message = '';
        }

        return (
            this.validations.name.valid &&
            this.validations.email.valid &&
            this.validations.password.valid &&
            this.validations.confirm_password.valid
        ) ? true : false;
    }
}
</script>