import React from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Grid } from '@components/Layout/Grid';
import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { HelperText } from '@components/Form/HelperText';
import { Typography } from '@components/DataDisplay/Typography';
import { PasswordResetedSuccessfully } from '../PasswordResetedSuccessfully';
import { useForm } from '@hooks/useForm';
import { resetPasswordSchema } from '@utils/yupSchemas';
import { resetPassword } from '@services/auth';

export const Form = (): JSX.Element => {
  const router = useRouter();

  const [isSuccessfully, setSuccessfully] = React.useState(false);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValidForm,
    isSubmitting,
  } = useForm({
    initialValues: {
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values, helpers) => {
      try {
        await resetPassword(
          window.btoa(values.password),
          router.query.token as string
        );
        helpers.setSubmitting(false);
        setSuccessfully(true);
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return isSuccessfully ? (
    <PasswordResetedSuccessfully />
  ) : (
    <div>
      <Typography as='h3' white>
        Crea una nueva contraseña
      </Typography>
      <Typography margin='12px 0 24px 0'>
        Su nueva contraseña debe ser diferente de las contraseñas de uso
        anterior
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid cols='1' gap={1.5}>
          <div>
            <Input
              placeholder='Tu nueva contraseña'
              fullWidth
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              showPasswordStrengthBar
            />
            {errors.password && (
              <HelperText error>{errors.password}</HelperText>
            )}
          </div>
          <div>
            <Input
              placeholder='Verifica tu contraseña'
              fullWidth
              name='passwordConfirmation'
              value={values.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
            />
            {errors.passwordConfirmation && (
              <HelperText error>{errors.passwordConfirmation}</HelperText>
            )}
          </div>
          <Button
            primary
            fullWidth
            type='submit'
            disabled={!isValidForm || isSubmitting}
          >
            Restablecer contraseña
          </Button>
        </Grid>
      </form>
    </div>
  );
};