import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
  } from "../components/ui/form";
  import { Input } from "../components/ui/input";
  

  
  // eslint-disable-next-line react/prop-types
  const CustomInput = ({ control, name, label, type = 'text', placeholder, required = false, disabled = false }) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className='form-item'>
            <FormLabel>{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  disabled={disabled}
                  required={required}
                  type={type}
                  className='text-16 placeholder:text-16 rounded-lg border border-text/20 text-text focus:ring-primary active:ring-primary placeholder:text-text/60'
                  {...field}
                />
              </FormControl>
              <FormMessage className='form-message mt-2' />
            </div>
          </div>
        )}
      />
    );
  };
  
  export default CustomInput;
  