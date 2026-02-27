import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
  Platform
} from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style, onPress }) => {
  const Component = onPress ? TouchableOpacity : View;
  return (
    <Component 
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.card, style]}
    >
      {children}
    </Component>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onPress,
  variant = 'primary', 
  size = 'md', 
  icon, 
  style 
}) => {
  const buttonStyles = [
    styles.button,
    styles[`btn_${variant}` as keyof typeof styles],
    styles[`btn_${size}` as keyof typeof styles],
    style
  ];

  const textStyles = [
    styles.btnText,
    styles[`btnText_${variant}` as keyof typeof styles],
  ];

  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.8}
      style={buttonStyles as ViewStyle[]}
    >
      <Text style={textStyles as TextStyle[]}>{children}</Text>
      {icon}
    </TouchableOpacity>
  );
};

interface InputProps {
  label?: string;
  multiline?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  numberOfLines?: number;
  style?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({ label, multiline, style, ...props }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput 
        multiline={multiline}
        style={[
          styles.input, 
          multiline && { height: 100, textAlignVertical: 'top' }
        ]}
        placeholderTextColor="#94a3b8"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      android: {
        elevation: 2,
      }
    })
  },
  button: {
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btn_primary: {
    backgroundColor: '#059669',
  },
  btn_secondary: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  btn_ghost: {
    backgroundColor: 'transparent',
  },
  btn_danger: {
    backgroundColor: '#fff1f2',
  },
  btn_sm: { px: 16, py: 8 },
  btn_md: { paddingHorizontal: 24, paddingVertical: 16 },
  btn_lg: { paddingHorizontal: 32, paddingVertical: 20 },
  btnText: {
    fontWeight: '700',
    fontSize: 14,
  },
  btnText_primary: { color: '#ffffff' },
  btnText_secondary: { color: '#475569' },
  btnText_ghost: { color: '#94a3b8' },
  btnText_danger: { color: '#f43f5e' },
  inputContainer: {
    gap: 4,
    width: '100%',
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginLeft: 8,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 16,
    padding: 16,
    fontSize: 14,
    color: '#0f172a',
  }
});
