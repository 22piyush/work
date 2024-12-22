const application = new Vue({
    el: '#app',
    data() {
      return {
        form: {
          email: '',
          totalAmount: 0,
          amount: null
        },
        rules: {
          email: [
            { required: true, message: 'Please input the email address', trigger: 'blur' },
            { type: 'email', message: 'Please input a valid email address', trigger: ['blur', 'change'] }
          ],
          amount: [
            { required: true, message: 'Please input the amount', trigger: 'blur' },
            { type: 'number', message: 'Amount must be a number', trigger: ['blur', 'change'] },
            { validator: (rule, value, callback) => {
                if (value < 1 || value > 10000) {
                  callback(new Error('Amount must be between 1 and 10000'));
                } else {
                  callback();
                }
              }, trigger: ['blur', 'change'] 
            }
          ]
        }
      };
    },
    methods: {
      addAmount() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.form.totalAmount += this.form.amount;
            this.form.amount = null; // Reset the amount field after adding
            this.$notify({
                title: 'Success',
                message: 'Amount Added Successfully',
                type: 'success'
              });
          } else {
            this.$notify.error({
                title: 'Error',
                message: 'Amount Not Added'
              });
            return false;
          }
        });
      }
    }
  });
  