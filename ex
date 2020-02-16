[1mdiff --git a/src/features/registration/components/RegistrationForm.tsx b/src/features/registration/components/RegistrationForm.tsx[m
[1mindex 0567b10..4e2feed 100644[m
[1m--- a/src/features/registration/components/RegistrationForm.tsx[m
[1m+++ b/src/features/registration/components/RegistrationForm.tsx[m
[36m@@ -9,32 +9,45 @@[m [mimport { Checkbox, FormControlLabel } from '@material-ui/core'[m
 const RegistrationForm = (): JSX.Element => {[m
   const dispatch = useDispatch()[m
   const success = useSelector(isSuccess)[m
[31m-  const [areRegistrationFieldsFalse, setAreRegistrationFieldsFalse] = useState(false)[m
[32m+[m[32m  const [areRegistrationFieldsOk, setAreRegistrationFieldsOk] = useState(false)[m
[32m+[m[32m  const [retypePassword, setRetypePassword] = useState(false)[m
   const [passwordField, setPasswordField] = useState(false)[m
[31m-  const [passwordHelperText, setPasswordHelperText] = useState('Password should be at least 8 characters long')[m
[32m+[m[32m  const [passwordHelperText, setPasswordHelperText] = useState('Password should has at least 8 characters')[m
   const [retypePasswordHelperText, setRetypePasswordHelperText] = useState('Repeat password')[m
[32m+[m[32m  const [termsChecked, setTermsChecked ] = useState(false);[m
 [m
   if (success) {[m
     return <Notification type={NotificationType.success} message="Success!" />[m
   }[m
 [m
   const handleSubmit = (values: InputValues): void => {[m
[31m-    if (areRegistrationFieldsFalse && values.password.length >= 8) {[m
[31m-      dispatch(register(values))[m
[31m-    }[m
[31m-    if (!areRegistrationFieldsFalse) {[m
[31m-      setAreRegistrationFieldsFalse(true)[m
[31m-      setRetypePasswordHelperText('Passwords muss match!')[m
[32m+[m[32m    if (values != null) {[m
[32m+[m[32m      if (values.password.length < 8) {[m
[32m+[m[32m        setPasswordField(true)[m
[32m+[m[32m        setPasswordHelperText('Invalid password. It should has at least 8 characters')[m
[32m+[m[32m      }[m
[32m+[m[32m      if (values.passwordRepeat != values.password) {[m
[32m+[m[32m        setRetypePassword(true)[m
[32m+[m[32m        setRetypePasswordHelperText('Passwords muss match!')[m
[32m+[m[32m      }[m
     }[m
[31m-    if (values.password.length < 8) {[m
[31m-      setPasswordField(true)[m
[31m-      setPasswordHelperText('Your password has less than 8 characters')[m
[32m+[m[32m    let registrationAllowed = passwordField && retypePassword[m
[32m+[m
[32m+[m[32m    if(registrationAllowed){[m
[32m+[m[32m      setAreRegistrationFieldsOk(true)[m
[32m+[m[32m    } else {[m
[32m+[m[32m      setAreRegistrationFieldsOk(false)[m
[32m+[m[32m     }[m
[32m+[m[41m     [m
[32m+[m[32m    if (areRegistrationFieldsOk) {[m
[32m+[m[32m      dispatch(register(values))[m
     }[m
   }[m
 [m
[32m+[m[41m    [m
[32m+[m
   return ([m
     <Form onSubmit={handleSubmit} submitButtonText="Sign up">[m
[31m-      <TextField label="Username" name="userName" />[m
       <TextField label="First name" name="firstName" />[m
       <TextField label="Last name" name="lastName" />[m
       <TextField label="E-Mail" type="email" name="email" />[m
[36m@@ -53,10 +66,10 @@[m [mconst RegistrationForm = (): JSX.Element => {[m
         type="password"[m
         name="passwordRepeat"[m
         helperText={retypePasswordHelperText}[m
[31m-        error={areRegistrationFieldsFalse}[m
[32m+[m[32m        error={retypePassword}[m
       />[m
       <FormControlLabel[m
[31m-        control={<Checkbox value="checkedA" name="termsAndPolicies" />}[m
[32m+[m[32m        control={<Checkbox value="checkedTerms" name="termsAndPolicies" required={true} />}[m
         label="I agree to terms of service and privacy policy."[m
       />[m
     </Form>[m
