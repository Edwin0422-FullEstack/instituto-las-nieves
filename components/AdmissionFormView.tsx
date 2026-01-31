import React, { useState } from 'react';
import Icon from './Icon';

const AdmissionFormView: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple form state
  const [formData, setFormData] = useState({
    studentName: '',
    studentLastname: '',
    grade: '',
    birthdate: '',
    parentName: '',
    parentEmail: '',
    parentPhone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    // Basic Validation
    if (step === 1) {
      if (!formData.studentName || !formData.studentLastname || !formData.grade) {
        alert("Por favor completa los datos del aspirante");
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 animate-fade-in-up">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
            <Icon name="CheckSquare" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Pre-inscripción Exitosa!</h2>
          <p className="text-gray-600 mb-8">
            Hemos recibido los datos de <strong>{formData.studentName}</strong> correctamente. 
            En breve enviaremos un correo a <strong>{formData.parentEmail}</strong> con los pasos para agendar la entrevista.
          </p>
          <button onClick={() => window.location.reload()} className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 animate-fade-in-up">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-800">Formulario de Aspirantes 2026</h1>
          <p className="text-gray-500 mt-2">Completa la información para iniciar el proceso</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-full h-2 mb-10 overflow-hidden shadow-sm">
          <div 
            className="bg-secondary h-full transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            
            {/* Step 1: Student Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-4 mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</div>
                  Datos del Aspirante
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Nombres</label>
                    <input 
                      type="text" 
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary bg-white text-gray-900"
                      placeholder="Ej. Juan Andrés"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Apellidos</label>
                    <input 
                      type="text" 
                      name="studentLastname"
                      value={formData.studentLastname}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary bg-white text-gray-900"
                      placeholder="Ej. Pérez Gómez"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Grado al que aspira</label>
                    <select 
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary bg-white text-gray-900"
                    >
                      <option value="">Seleccione...</option>
                      <option value="Jardin">Jardín</option>
                      <option value="Transicion">Transición</option>
                      <option value="Primero">Primero</option>
                      <option value="Sexto">Sexto</option>
                      <option value="Decimo">Décimo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Fecha de Nacimiento</label>
                    <input 
                      type="date" 
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary bg-white text-gray-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Parent Info */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-4 mb-6">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</div>
                  Datos del Acudiente
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Nombre Completo</label>
                    <input 
                      type="text" 
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary bg-white text-gray-900"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Correo Electrónico</label>
                      <input 
                        type="email" 
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary bg-white text-gray-900"
                        placeholder="para contacto oficial"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Teléfono Móvil</label>
                      <input 
                        type="tel" 
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in-up text-center">
                 <h3 className="text-xl font-bold text-primary mb-6">Confirmar Información</h3>
                 <div className="bg-gray-50 p-6 rounded-xl text-left space-y-3 border border-gray-200">
                    <p><strong>Aspirante:</strong> {formData.studentName} {formData.studentLastname}</p>
                    <p><strong>Grado:</strong> {formData.grade}</p>
                    <p><strong>Acudiente:</strong> {formData.parentName}</p>
                    <p><strong>Correo:</strong> {formData.parentEmail}</p>
                 </div>
                 <p className="text-sm text-gray-500">Al enviar, acepta nuestra política de tratamiento de datos personales.</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="text-gray-500 font-bold hover:text-primary transition-colors"
                >
                  Atrás
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-lg"
                >
                  Siguiente
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Finalizar Inscripción'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormView;