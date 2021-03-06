import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockIcon from "@material-ui/icons/Lock";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
const useStyles = makeStyles((theme) => ({
    password: {
        marginTop: "60px",
        marginBottom: "10px",
        width: "320px",
    },
    confirmPassword: {
        // marginTop: "80px",
        marginBottom: "30px",
        width: "320px",
    },
    question: {
        // marginTop: "80px",
        marginBottom: "10px",
        width: "320px",
    },
    answer: {
        // marginTop: "80px",
        // marginBottom: "20px",
        width: "320px",
    },
}));
function Security({ values, handleChange }) {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };
    return (
        <div className="containerSecurity">
            <FormControl className={classes.password}>
                <InputLabel
                    style={{ color: "grey" }}
                    className={classes.labelPass}
                    htmlFor="standard-adornment-password"
                >
                    Password
                </InputLabel>
                <Input
                    id="password"
                    value={values.password}
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange("password")}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                style={{ opacity: "0.7" }}
                                aria-label="toggle password visibility"
                                onMouseDown={handleClickShowPassword}
                                onMouseUp={handleClickShowPassword}
                            >
                                {showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                            <LockIcon style={{ opacity: "0.7" }} />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl className={classes.confirmPassword}>
                <InputLabel
                    style={{ color: "grey" }}
                    className={classes.labelPass}
                    htmlFor="standard-adornment-password"
                >
                    Confirm Password
                </InputLabel>
                <Input
                    id="confirmPassword"
                    value={values.confirmPassword}
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={handleChange("confirmPassword")}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                style={{ opacity: "0.7" }}
                                aria-label="toggle password visibility"
                                onMouseDown={handleClickShowConfirmPassword}
                                onMouseUp={handleClickShowConfirmPassword}
                            >
                                {showConfirmPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                            <LockIcon style={{ opacity: "0.7" }} />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Select
                id="securityQuestion"
                className={classes.question}
                displayEmpty
                value={values.securityQuestion}
                onChange={handleChange("securityQuestion")}
            >
                <MenuItem value="" disabled>
                    Choose Security Question...
                </MenuItem>
                <MenuItem value="When you were young, what did you want to be when you grew up?">When you were young, what did you want to be when you grew up?</MenuItem>
                <MenuItem value="Who was your childhood hero?">Who was your childhood hero?</MenuItem>
                <MenuItem value="Where was your best family vacation as a kid?">Where was your best family vacation as a kid?</MenuItem>
                <MenuItem value="What is the name, breed, and color of your favorite pet?">What is the name, breed, and color of your favorite pet?</MenuItem>
                <MenuItem value="What was the first concert you attended?">What was the first concert you attended?</MenuItem>
            </Select>
            <FormControl className={classes.answer}>
                <InputLabel style={{ color: "grey" }}>
                    Enter your answer
                </InputLabel>
                <Input
                    id="securityAnswer"
                    type="text"
                    value={values.securityAnswer}
                    required
                    onChange={handleChange("securityAnswer")}
                    endAdornment={
                        <InputAdornment
                            style={{ opacity: "0.7" }}
                            position="end"
                        >
                            <QuestionAnswerIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    );
}

export default Security;
