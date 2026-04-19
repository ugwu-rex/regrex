# regex

## How It Works
Each card type has a unique prefix (the digits it starts with) and a specific number length.  
The program uses regex patterns to check both the prefix and the total number of digits.

## Supported Card Types

### Visa
- Starts with 4  
- Contains 13 or 16 digits

### Mastercard
- Starts with 51–55, or  
- Starts with 2221–2720  
- Always 16 digits

### Verve
- Starts with 506, 507, or 650  
- Contains 16–19 digits
