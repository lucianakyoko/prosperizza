import { Check } from "@phosphor-icons/react/dist/ssr";
import './stepper.css';

export const Stepper = ({stepList, currentStep, isComplete}) => {
  return (
    <div className="flex justify-between">
      {stepList.map((stepItem, i) =>(
        <div 
          key={stepItem.step} 
          className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || isComplete) && "complete"} `}
        >
          <div className={`step`}>
            {i + 1 < currentStep || isComplete ? <Check /> : i + 1}
          </div>
          <p className={`text-brown-300  text-sm`}>{stepItem.step}</p>
        </div>
      ))}
    </div>
  );
}