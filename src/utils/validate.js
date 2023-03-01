import { isNil } from 'lodash';
import i18n from 'i18next';

const required = (message) => ({
    validator: (_, value) => (isNil(value) || value === '' ? Promise.reject(new Error(message)) : Promise.resolve()),
});
// This rule only supports <Input>
const noWhiteSpace = (message?) => ({
    validator: (_, value) =>
        value && value.trim() === '' ? Promise.reject(new Error('has nowWhite')) : Promise.resolve(),
});
const compareSame = (message?, compareValue) => ({
    validator: (_, value) => (value && value === compareValue ? Promise.reject(new Error(message)) : Promise.resolve()),
});
const compareNotSame = (message?, compareValue) => ({
    validator: (_, value) => (value && value !== compareValue ? Promise.reject(new Error(message)) : Promise.resolve()),
});
const specialCharacters = () => ({
    validator: (_, value) => {
        const regex = /^[A-Za-z\s]+$/;
        return !value || regex.test(value)
            ? Promise.resolve()
            : Promise.reject(new Error(i18n.t('Do not enter special characters')));
    },
});
const minLength = (message, minLength) => ({
    validator: (_, value) => {
        return value && value.length < minLength ? Promise.reject(new Error(message)) : Promise.resolve();
    },
});
const dobSelected = () => ({
    validator: (_, value) => {
        return value < new Date() ? Promise.resolve() : Promise.reject(new Error(i18n.t('Please select time!')));
    },
});

const comboBoxSelect = (message) => ({
    validator: (_, value) => {
        return !isNil(value) && value !== '' ? Promise.resolve() : Promise.reject(new Error(message));
    },
});

export { required, noWhiteSpace, compareSame, compareNotSame, specialCharacters, dobSelected, comboBoxSelect,minLength };
