export type AlertVariant = 'informational' | 'success' | 'warning' | 'error';

export interface AlertProps {
  /** The visual style and semantic meaning of the alert. */
  variant: AlertVariant;
  /** Optional heading displayed above the alert message. */
  title?: string;
  /** The alert message. */
  children: React.ReactNode;
}

const variantStyles: Record<AlertVariant, { border: string; background: string; iconColor: string; icon: string; defaultTitle: string }> = {
  informational: {
    border: '#135180',
    background: '#e8f1f8',
    iconColor: '#135180',
    icon: 'ℹ',
    defaultTitle: 'Information',
  },
  success: {
    border: '#13592E',
    background: '#e9f5ee',
    iconColor: '#13592E',
    icon: '✓',
    defaultTitle: 'Success',
  },
  warning: {
    border: '#733F00',
    background: '#fdf3dc',
    iconColor: '#733F00',
    icon: '⚠',
    defaultTitle: 'Warning',
  },
  error: {
    border: '#8C291F',
    background: '#fdecea',
    iconColor: '#8C291F',
    icon: '✕',
    defaultTitle: 'Error',
  },
};

export function Alert({ variant, title, children }: AlertProps) {
  const styles = variantStyles[variant];
  const heading = title ?? styles.defaultTitle;

  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        gap: '12px',
        padding: '14px 16px',
        border: `2px solid ${styles.border}`,
        borderRadius: '4px',
        backgroundColor: styles.background,
        marginBottom: '16px',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          color: styles.iconColor,
          fontWeight: 'bold',
          fontSize: '1.1em',
          flexShrink: 0,
          lineHeight: '1.5',
        }}
      >
        {styles.icon}
      </span>
      <div>
        <strong
          style={{
            display: 'block',
            color: styles.iconColor,
            marginBottom: '2px',
          }}
        >
          {heading}
        </strong>
        <div style={{ color: '#1b1b1b' }}>{children}</div>
      </div>
    </div>
  );
}
