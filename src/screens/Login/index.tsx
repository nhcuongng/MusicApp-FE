import {StyleSheet, Text, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import {COLOR_PALETTE, SPACING} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useForm, Controller} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';
import Container from '../../components/container';

export const Login = ({navigation}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: 'cuong',
      password: 'Cuong123456',
    },
  });
  const onSubmit = data => {
    navigation.navigate('home');
  };

  return (
    <Container
      header={<Text style={styles.title}>Sign In</Text>}
      headerStyles={styles.header}>
      <View style={styles.form}>
        <View>
          <View style={styles.formItem}>
            <Text>Username</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, ...props}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  onChangeText={onChange}
                  {...props}
                />
              )}
              name="username"
            />
            {errors.username && (
              <Text style={styles.error}>Username is required.</Text>
            )}
          </View>
          <View style={styles.formItem}>
            <Text>Password</Text>
            <View style={styles.inputPassword}>
              <Controller
                control={control}
                rules={{
                  required: {
                    message: 'Password is required',
                    value: true,
                  },
                  pattern: {
                    message:
                      'Minimum eight characters, at least one letter and one number:',
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  },
                }}
                render={({field: {onChange, ...props}}) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={onChange}
                    secureTextEntry={isShowPassword}
                    {...props}
                  />
                )}
                name="password"
              />
              <View style={styles.togglePassword}>
                <TouchableOpacity
                  onPress={() => setIsShowPassword(prev => !prev)}>
                  <Icon name={isShowPassword ? 'eye' : 'eye-off'} size={18} />
                </TouchableOpacity>
              </View>
            </View>
            {errors.password && (
              <Text style={styles.error}>{errors.password.message}</Text>
            )}
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={styles.formItem}>
              <View style={styles.buttons}>
                <Text>Sign in</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={styles.formItem}>
              <View style={styles.buttonLink}>
                <View style={{flexDirection: 'row'}}>
                  <Text>If you do not has account, please </Text>
                  <Text style={styles.signUpText}>Sign up</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.or}>
            <View
              style={[
                styles.lineWrapper,
                {
                  justifyContent: 'flex-end',
                },
              ]}>
              <View style={styles.line} />
            </View>
            <Text>OR</Text>
            <View style={styles.lineWrapper}>
              <View style={styles.line} />
            </View>
          </View>
          <View style={styles.otherLoginOption}>
            <Text>Sign in with</Text>
            <View style={styles.buttons}>
              <View>
                <Icon name="logo-google" />
              </View>
              <Text>Google</Text>
            </View>
            <View style={styles.buttons}>
              <View>
                <Icon name="logo-apple" />
              </View>
              <Text>Apple</Text>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR_PALETTE.PRIMARY,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  form: {
    paddingHorizontal: SPACING.S_4,
    paddingVertical: SPACING.S_4,
  },
  formItem: {
    marginBottom: SPACING.S_8,
    gap: SPACING.S_3,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: COLOR_PALETTE.PRIMARY,
  },
  or: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.S_4,
    marginVertical: SPACING.S_4,
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: '#ccc',
  },
  lineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  buttons: {
    borderWidth: 1,
    padding: SPACING.S_6,
    borderRadius: 4,
    borderColor: COLOR_PALETTE.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.S_2,
  },
  buttonLink: {
    alignItems: 'flex-end',
  },
  signUpText: {
    color: '#1F509A',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  otherLoginOption: {
    gap: SPACING.S_8,
  },
  error: {
    color: COLOR_PALETTE.RED,
    fontSize: 10,
  },
  inputPassword: {
    position: 'relative',
  },
  togglePassword: {
    position: 'absolute',
    top: 0,
    right: 10,
    bottom: 0,
    justifyContent: 'center',
  },
});
