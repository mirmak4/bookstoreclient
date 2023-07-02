import { Paper, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import styles from './LoginStyles.module.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../modules/user/UserAction';
import { loginErrorSnack, loginSuccessSnack, passwordLabel, passwordMaxChars, passwordMaxText, passwordMinChars, passwordMinText, 
    passwordRequiredText, passwordText, usernameLabel, userNameMaxChars, userNameMaxText, userNameMinChars, 
    userNameMinText, userNameRequiredText, userNameText } from '../../helpers/Consts';
import { getUserPromise } from '../../modules/user/UserSelector';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { IsUserLoggedIn } from '../../helpers/UesrHelper';
import { Navigate } from 'react-router-dom';

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
    const loginPromise = useSelector(getUserPromise);
    const { enqueueSnackbar } = useSnackbar();
    const navigation = useNavigate();

    useEffect(() => {
        if (loginPromise.isErrorOccured) {
            enqueueSnackbar(
                loginErrorSnack,
                {
                    variant: 'error'
                }
            );
        }
        else if (loginPromise.isFulfilled) {
            enqueueSnackbar(
                loginSuccessSnack,
                {
                    variant: 'success'
                }
            );
            navigation('/');
        }
    }, [loginPromise, enqueueSnackbar, navigation]);

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
        <Box>
        {
            IsUserLoggedIn() && (
                <Navigate to="/" />
            )
        }
        {
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
                                    label={usernameLabel}
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
                                    label={passwordLabel}
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
                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    color='primary' 
                                    className={ styles.buttonStyle } 
                                    disabled={ loginPromise.isPending }
                                >
                                    Login
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                </form>
            </Box>
        }
        </Box>
    );
};

export default Login;