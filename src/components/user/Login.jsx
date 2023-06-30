import { Paper, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './LoginStyles.module.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../modules/user/UserAction';
import { passwordMaxChars, passwordMaxText, passwordMinChars, passwordMinText, 
    passwordRequiredText, passwordText, userNameMaxChars, userNameMaxText, userNameMinChars, 
    userNameMinText, userNameRequiredText, userNameText } from '../../helpers/Consts';

const validationSchema = yup.object({
    username: yup
        // .string(userNameText)
        .string()
        .min(userNameMinChars, userNameMinText)
        .max(userNameMaxChars, userNameMaxText)
        .required(userNameRequiredText),
    password: yup
        // .string(passwordText)
        .string()
        .min(passwordMinChars, passwordMinText)
        .max(passwordMaxChars, passwordMaxText)
        .required(passwordRequiredText)
});

const Login = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(loginAction(values.username, values.password));
        },
    });

    return (
        <Box className={ styles.formContainer } >
        <form className={ styles.formStyle } autoComplete='off' noValidate onSubmit={ formik.handleSubmit }>
            <Box className={ styles.wrapper } >
                <Paper className={ styles.paper } >
                    <Typography className={ styles.headerText } variant='h4'>Book Store Login</Typography>

                    <Box className={ styles.itemContainer } >
                        <TextField 
                            name='username'
                            id='username'
                            data-testid='username-id'
                            label='User Name'
                            variant='outlined'
                            placeholder={userNameText}
                            value={ formik.values.username }
                            onChange={ formik.handleChange }
                            helperText={ formik.touched.username && formik.errors.username }
                            error={ formik.touched.username && Boolean(formik.errors.username) }
                            className={ styles.inputStyle }
                        />
                    </Box>

                    <Box className={ styles.itemContainer } >
                        <TextField 
                            name='password'
                            id='password'
                            data-testid='password-id'
                            label='Password'
                            variant='outlined'
                            placeholder={passwordText}
                            value={ formik.values.password }
                            onChange={ formik.handleChange }
                            helperText={ formik.touched.password && formik.errors.password }
                            error={ formik.touched.password && Boolean(formik.errors.password) }
                            className={ styles.inputStyle }
                        />
                    </Box>

                    <Box className={ styles.itemContainer } >
                        <Button type='submit' variant='contained' color='primary' className={ styles.buttonStyle } >
                            Login
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </form>
        </Box>
    );
};

export default Login;