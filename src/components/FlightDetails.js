import PropTypes from "prop-types";

const FlightDetails = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] rounded-2xl bg-aliceblue-200 max-w-full overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[16px] leading-[normal] tracking-[normal] ${className}`}
    >
      <div className="self-stretch h-[68px] bg-white" />
      <div className="w-[404px] h-[708px] relative shadow-[1px_0px_4px_rgba(0,_0,_0,_0.04)] bg-white hidden max-w-full" />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-smi text-dark-700 font-text-p4-13-18-475">
        <div className="w-[1112px] flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <div className="h-[623px] flex-1 shadow-[0px_1px_2px_rgba(26,_43,_61,_0.08)] rounded-lg bg-white overflow-hidden min-w-[161px]" />
          <div className="w-[840px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                <div className="flex flex-row items-center justify-start gap-[6px] max-w-full">
                  <img
                    className="h-4 w-4 relative hidden"
                    alt=""
                    src="/line--arrow--left.svg"
                  />
                  <div className="flex flex-row items-center justify-start pt-0 px-0 pb-0.5">
                    <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[35px]">
                      Home
                    </a>
                  </div>
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/line--angle--right.svg"
                  />
                  <div className="flex flex-row items-center justify-start pt-0 px-0 pb-0.5">
                    <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[90px] whitespace-nowrap">
                      Booking History
                    </a>
                  </div>
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/line--angle--right.svg"
                  />
                  <div className="flex flex-row items-center justify-start pt-0 px-0 pb-0.5">
                    <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[32px]">
                      Flight
                    </a>
                  </div>
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/line--angle--right.svg"
                  />
                  <div className="flex flex-row items-center justify-start pt-0 px-0 pb-0.5 text-blue-500">
                    <div className="relative leading-[18px] inline-block min-w-[126px]">
                      STFL17121182045413
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.04)] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-xs text-white">
                <div className="self-stretch bg-white box-border overflow-hidden flex flex-row items-end justify-start py-4 px-5 gap-[16px] max-w-full border-b-[1px] border-solid border-aliceblue-200 mq725:flex-wrap">
                  <div className="w-6 flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border text-center text-sm">
                    <div className="self-stretch rounded-2xl bg-blue-500 flex flex-row items-start justify-start pt-[0.4px] px-1 pb-[3px]">
                      <b className="flex-1 relative tracking-[-0.01em] leading-[20.6px] font-semibold">
                        1
                      </b>
                    </div>
                  </div>
                  <div className="h-[18px] hidden flex-row items-center justify-start pt-0 px-0 pb-0.5 box-border text-dark-700">
                    <div className="self-stretch flex-1 relative leading-[16px]">
                      Partial
                    </div>
                  </div>
                  <div className="h-[3px] w-[3px] relative rounded-[50%] bg-dark-500 hidden" />
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[440px] pl-0 box-border gap-[2px] min-w-[442px] max-w-full text-[18px] text-darkslategray mq650:min-w-full mq450:pr-5 mq450:box-border mq725:pr-[220px] mq725:box-border">
                    <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[24px] font-semibold text-[inherit] inline-block min-w-[83px]">
                      DAC → JFK
                    </a>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[6px] text-smi text-dark-700">
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="relative leading-[16px] inline-block min-w-[61px]">
                          Round Trip
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                          <div className="w-[3px] h-[3px] relative rounded-[50%] bg-dark-500" />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="relative leading-[16px] inline-block min-w-[113px]">
                          25 Mar - 4 Apr 2023
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                          <div className="w-[3px] h-[3px] relative rounded-[50%] bg-dark-500" />
                        </div>
                      </div>
                      <div className="relative leading-[16px] inline-block min-w-[36px]">
                        1 Stop
                      </div>
                    </div>
                  </div>
                  <div className="h-[3px] w-[3px] relative rounded-[50%] bg-dark-500 hidden" />
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px] text-right text-blue-500">
                    <div className="rounded-[32px] bg-aliceblue-100 flex flex-row items-start justify-start pt-1 px-2 pb-1.5 whitespace-nowrap">
                      <a className="[text-decoration:none] relative leading-[16px] font-medium text-[inherit] inline-block min-w-[48px]">
                        33h 20m
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start py-5 pr-4 pl-5 box-border gap-[16px] max-w-full text-darkslategray">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full text-smi mq725:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative"
                        alt=""
                        src="/line--location.svg"
                      />
                    </div>
                    <div className="flex-1 rounded-md bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-2.5 px-4 pb-3 box-border gap-[8px] min-w-[497px] max-w-full mq650:min-w-full mq725:flex-wrap">
                      <div className="flex-1 relative leading-[18px] inline-block min-w-[235px] max-w-full">
                        Departure from Dhaka
                      </div>
                      <div class="relative flex-1 min-w-[235px] max-w-full">
                        <input
                          id="airport-input"
                          aria-label="Terminal 1: John F Kennedy International Airport"
                          type="text"
                          class="w-full [border:none] [outline:none] bg-[transparent] h-[17px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-smi text-dark-700 min-w-[235px] max-w-full"
                        />
                        <div
                          class="absolute inset-0 flex items-center justify-end pointer-events-none text-gray-500 text-smi pr-2"
                          id="placeholder"
                        >
                          <span>
                            <b class="font-bold">Terminal 1:</b> &nbsp;Hazrat
                            Shahjalal International Airport
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-44 h-4 relative tracking-[0.02em] leading-[16px] text-neutral-600-5515 hidden whitespace-nowrap">
                    6:35 AM - 10:15 PM
                  </div>
                  <div className="w-[142.7px] relative leading-[20px] font-medium text-neutral-800-3429 hidden">
                    28 Mar, FRI
                  </div>
                  <img
                    className="w-4 h-4 relative object-contain hidden"
                    alt=""
                    src="/aeroplane-1-traced.svg"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full text-base">
                    <div className="self-stretch flex flex-row items-end justify-start gap-[16px] max-w-full mq725:flex-wrap">
                      <div className="h-[91px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
                          <img
                            className="w-6 h-6 relative rounded-lg overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/airlines--emirates.svg"
                          />
                          <div className="flex-1 flex flex-row items-start justify-start py-0 px-[11px]">
                            <div className="self-stretch w-0.5 relative rounded-12xs bg-gainsboro" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[497px] max-w-full mq650:min-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq725:flex-wrap">
                            <div className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[59px]">
                              DAC - DXB
                            </div>
                            <b className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[59px] whitespace-nowrap">
                              07:30 PM
                            </b>
                            <b className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[59px] whitespace-nowrap">
                              08:50 AM
                            </b>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-dark-700 mq725:flex-wrap">
                            <div className="flex-1 relative leading-[20px] inline-block min-w-[82px]">
                              12 hr 20 min
                            </div>
                            <div className="flex-1 relative leading-[20px] inline-block min-w-[82px]">
                              28 Mar, Friday
                            </div>
                            <div className="flex-1 relative leading-[20px] inline-block min-w-[82px]">
                              29 Mar, Saturday
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-dark-700 mq725:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[185px] text-neutral-800-3429">
                            <div className="self-stretch h-4 relative leading-[18px] font-medium flex items-center overflow-hidden text-ellipsis shrink-0">
                              Turkish Airlines
                            </div>
                            <div className="self-stretch relative leading-[18px] text-dark-700">
                              Flight no : TUR467
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[185px]">
                            <div className="self-stretch h-4 relative leading-[18px] inline-block overflow-hidden text-ellipsis shrink-0">
                              Airbus Industrie 737-800-738
                            </div>
                            <div className="self-stretch relative leading-[18px]">
                              <span>{`Class : `}</span>
                              <span className="font-medium">ECONOMY-Y (O)</span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[185px] text-xs">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2px] opacity-[0]">
                              <div className="self-stretch h-4 relative leading-[16px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                                Airbus Industrie 737-800-738
                              </div>
                              <div className="self-stretch h-4 relative leading-[16px] flex items-center">
                                Class : ECONOMY-Y (O)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[4px] max-w-full text-xs text-neutral-800-3429">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq725:flex-wrap">
                        <div className="h-[77px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="w-4 h-4 flex flex-row items-center justify-center [transform:_rotate(-180deg)]">
                            <img
                              className="h-3.5 w-[13px] relative [transform:_rotate(180deg)]"
                              loading="lazy"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start py-0 px-[7px]">
                            <div className="self-stretch w-0.5 relative rounded-12xs bg-gainsboro" />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[497px] max-w-full mq650:min-w-full">
                          <div className="self-stretch rounded-md bg-antiquewhite box-border flex flex-row items-end justify-start pt-[7px] pb-[9px] pr-[11px] pl-[13px] gap-[9.6px] max-w-full border-[1px] border-solid border-bisque mq725:flex-wrap">
                            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.6px]">
                              <div className="w-[16.7px] h-[16.7px] relative rounded-xl bg-darkorange overflow-hidden shrink-0">
                                <div className="absolute h-[57.49%] w-[13.17%] top-[22.16%] right-[43.71%] bottom-[20.36%] left-[43.11%] rounded-xl bg-white">
                                  <div className="absolute h-[69.79%] w-[90.91%] top-[0%] right-[4.55%] bottom-[30.21%] left-[4.55%] rounded-xl bg-white hidden" />
                                  <div className="absolute h-[22.92%] w-full top-[77.08%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
                                </div>
                              </div>
                            </div>
                            <p className="m-0 flex-1 relative leading-[16px] inline-block min-w-[463px] max-w-full mq650:min-w-full">
                              Technical stoppage at Malpensa International
                              Airport (Milano). Before booking this flight
                              please check your visa requirements as per your
                              nationality
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full text-smi text-darkslategray mq725:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                          <img
                            className="w-6 h-6 relative"
                            alt=""
                            src="/line--location.svg"
                          />
                        </div>
                        <div className="flex-1 rounded-md bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-start pt-2.5 px-4 pb-3 box-border gap-[8px] min-w-[497px] max-w-full mq650:min-w-full mq725:flex-wrap">
                          <div className="flex-1 relative leading-[18px] inline-block min-w-[235px] max-w-full">{`Layover at Dubai: 12 hr 20 min `}</div>
                          <input
                            className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-text-p4-13-18-475 text-smi bg-[transparent] h-[18px] flex-1 relative leading-[18px] text-dark-700 text-right inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[235px] max-w-full p-0"
                            placeholder="Dubai International Airport"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-44 h-4 relative tracking-[0.02em] leading-[16px] text-neutral-600-5515 hidden whitespace-nowrap">
                    6:35 AM - 10:15 PM
                  </div>
                  <div className="w-[142.7px] relative leading-[20px] font-medium text-neutral-800-3429 hidden">
                    28 Mar, FRI
                  </div>
                  <img
                    className="w-4 h-4 relative object-contain hidden"
                    alt=""
                    src="/aeroplane-1-traced.svg"
                  />
                  <div className="self-stretch flex flex-row items-end justify-start gap-[16px] max-w-full text-sm mq725:flex-wrap">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                      <div className="flex flex-col items-start justify-start gap-[12.5px]">
                        <img
                          className="w-6 h-6 relative rounded-lg overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/airlines--emirates.svg"
                        />
                        <div className="flex flex-row items-start justify-start py-0 px-1">
                          <div className="flex flex-col items-start justify-start gap-[8px]">
                            <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                              <div className="h-[19px] w-0.5 relative rounded-12xs bg-gainsboro" />
                            </div>
                            <div className="w-4 h-4 flex flex-row items-center justify-center [transform:_rotate(-180deg)]">
                              <img
                                className="h-3.5 w-[13px] relative [transform:_rotate(180deg)]"
                                loading="lazy"
                                alt=""
                                src="/vector.svg"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                              <div className="h-[19px] w-0.5 relative rounded-12xs bg-gainsboro" />
                            </div>
                          </div>
                        </div>
                        <img
                          className="w-6 h-6 relative"
                          loading="lazy"
                          alt=""
                          src="/line--location-2.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[497px] max-w-full mq650:min-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-base mq725:flex-wrap">
                        <div className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[59px]">
                          DAC - DXB
                        </div>
                        <b className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[59px] whitespace-nowrap">
                          07:30 PM
                        </b>
                        <b className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[59px] whitespace-nowrap">
                          08:50 AM
                        </b>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-dark-700 mq725:flex-wrap">
                        <div className="flex-1 relative leading-[20px] inline-block min-w-[82px]">
                          12 hr 20 min
                        </div>
                        <div className="flex-1 relative leading-[20px] inline-block min-w-[82px]">
                          28 Mar, Friday
                        </div>
                        <div className="flex-1 relative leading-[20px] inline-block min-w-[82px]">
                          29 Mar, Saturday
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start py-4 px-0 z-[1] text-dark-700">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[12px] mq725:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[185px] text-neutral-800-3429">
                            <div className="self-stretch h-4 relative leading-[18px] font-medium flex items-center overflow-hidden text-ellipsis shrink-0">
                              Turkish Airlines
                            </div>
                            <div className="self-stretch relative leading-[18px] text-dark-700">
                              Flight no : TUR467
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-center gap-[6px] min-w-[185px]">
                            <div className="self-stretch h-4 relative leading-[18px] inline-block overflow-hidden text-ellipsis shrink-0">
                              Airbus Industrie 737-800-738
                            </div>
                            <div className="self-stretch relative leading-[18px]">
                              <span>{`Class : `}</span>
                              <span className="font-medium">ECONOMY-Y (O)</span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-center gap-[2px] opacity-[0] min-w-[185px] text-xs">
                            <div className="self-stretch h-4 relative leading-[16px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                              Airbus Industrie 737-800-738
                            </div>
                            <div className="self-stretch h-4 relative leading-[16px] flex items-center">
                              Class : ECONOMY-Y (O)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-md bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-2.5 px-4 pb-3 box-border gap-[8px] max-w-full text-smi mq725:flex-wrap">
                        <div className="flex-1 relative leading-[18px] inline-block min-w-[235px] max-w-full">
                          Destination at New York
                        </div>
                        <div class="relative flex-1 min-w-[235px] max-w-full">
                          <input
                            id="airport-input"
                            aria-label="Terminal 4: John F Kennedy International Airport"
                            type="text"
                            class="w-full [border:none] [outline:none] bg-[transparent] h-[17px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-smi text-dark-700 min-w-[235px] max-w-full"
                          />
                          <div
                            class="absolute inset-0 flex items-center justify-end pointer-events-none text-gray-500 text-smi pr-2"
                            id="placeholder"
                          >
                            <span>
                              <b class="font-bold">Terminal 4:</b> &nbsp;John F
                              Kennedy International Airport
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

FlightDetails.propTypes = {
  className: PropTypes.string,
};

export default FlightDetails;
