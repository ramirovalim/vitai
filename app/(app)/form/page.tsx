import { MyForm } from "@/components/RegisterForm";
import { CheckboxReactHookFormSingle } from "@/components/form/checkbox";
import { CheckboxReactHookFormMultiple } from "@/components/form/checkboxMulti";
import { ComboboxForm } from "@/components/form/combobox";
import { DatePickerForm } from "@/components/form/datePicker";
import { RadioGroupForm } from "@/components/form/radioButton";
import { SelectForm } from "@/components/form/select";
import { SwitchForm } from "@/components/form/switch";
import { TextAreaForm } from "@/components/form/textArea";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>VITAI2</h2>
      <MyForm />
      <ComboboxForm />
      <h2>Single Checkbox</h2>
      <CheckboxReactHookFormSingle />
      <h2>Multi Checkbox</h2>
      <CheckboxReactHookFormMultiple />
      <h2>Date Picker</h2>
      <DatePickerForm />
      <h2>Radio</h2>
      <RadioGroupForm />
      <h2>Select</h2>
      <SelectForm />
      <h2>Switch</h2>
      <SwitchForm />
      <h2>Text area</h2>
      <TextAreaForm />
    </div>
  );
}
