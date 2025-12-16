export const Header = () => {
    return (
        <>
            <style>
                {`
                .header {
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(8px);
                    border-bottom: 1px solid #e5e7eb;
                    padding: 12px 16px;
                }

                .header-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .icon-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .icon-btn:hover {
                    background: #f3f4f6;
                }

                .header-title {
                    font-size: 18px;
                    font-weight: 700;
                    text-align: center;
                    flex: 1;
                }

                .stepper {
                    margin-top: 16px;
                    margin-bottom: 8px;
                }

                .stepper-wrapper {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 8px;
                }

                .stepper-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #e5e7eb;
                    transform: translateY(-50%);
                }

                .stepper-line-active {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 38%;
                    height: 2px;
                    background: #2563eb;
                    transform: translateY(-50%);
                }

                .step {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }

                .step-circle {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid #d1d5db;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ffffff;
                    color: #6b7280;
                    font-size: 14px;
                }

                .step.active .step-circle {
                    background: #2563eb;
                    border-color: #2563eb;
                    color: #ffffff;
                    box-shadow: 0 6px 14px rgba(37, 99, 235, 0.35);
                }

                .step-label {
                    font-size: 10px;
                    font-weight: 600;
                    color: #6b7280;
                }

                .step.active .step-label {
                    color: #2563eb;
                }
                `}
            </style>

            <header className="header">
                <div className="header-top">
                    <button className="icon-btn">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>

                    <h1 className="header-title">Tourist Registration</h1>

                    <button className="icon-btn">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>

                <div className="stepper">
                    <div className="stepper-wrapper">
                        <div className="stepper-line"></div>
                        <div className="stepper-line-active"></div>

                        <div className="step active">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <span className="step-label">Personal</span>
                        </div>

                        <div className="step active">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">id_card</span>
                            </div>
                            <span className="step-label">ID Proof</span>
                        </div>

                        <div className="step">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">emergency_home</span>
                            </div>
                            <span className="step-label">Contact</span>
                        </div>

                        <div className="step">
                            <div className="step-circle">
                                <span className="material-symbols-outlined">fact_check</span>
                            </div>
                            <span className="step-label">Review</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
