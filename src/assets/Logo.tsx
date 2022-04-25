import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width={131} height={150} fill="none" {...props}>
      <Path
        d="M.818 143v-23.273H3.5v8.591h.227c.197-.303.47-.689.818-1.159.357-.477.864-.901 1.523-1.273.667-.378 1.568-.568 2.705-.568 1.47 0 2.765.368 3.886 1.102 1.121.735 1.996 1.777 2.625 3.125.629 1.349.943 2.94.943 4.773 0 1.849-.314 3.451-.943 4.807-.629 1.348-1.5 2.394-2.614 3.136-1.113.735-2.397 1.103-3.852 1.103-1.121 0-2.019-.186-2.693-.557-.674-.379-1.193-.807-1.557-1.284a17.273 17.273 0 01-.84-1.205h-.319V143H.82zm2.637-8.727c0 1.318.193 2.481.58 3.488.385 1 .95 1.784 1.692 2.353.743.56 1.652.841 2.728.841 1.12 0 2.056-.296 2.806-.887.758-.598 1.326-1.401 1.705-2.409.386-1.015.58-2.144.58-3.386 0-1.228-.19-2.334-.569-3.318-.37-.993-.935-1.777-1.693-2.353-.75-.583-1.693-.875-2.83-.875-1.09 0-2.007.277-2.75.83-.742.545-1.302 1.31-1.681 2.295-.38.978-.568 2.118-.568 3.421zM31.33 135.864v-10.319h2.681V143H31.33v-2.955h-.181c-.41.887-1.046 1.641-1.91 2.262-.863.613-1.954.92-3.272.92-1.091 0-2.06-.238-2.91-.716-.848-.484-1.514-1.212-2-2.181-.484-.978-.727-2.209-.727-3.694v-11.091h2.682v10.91c0 1.272.356 2.287 1.069 3.045.72.758 1.636 1.136 2.75 1.136.666 0 1.344-.17 2.034-.511.697-.341 1.28-.864 1.75-1.568.477-.705.715-1.602.715-2.693zM45.514 143.364c-1.454 0-2.738-.368-3.852-1.103-1.114-.742-1.985-1.788-2.614-3.136-.629-1.356-.943-2.958-.943-4.807 0-1.833.315-3.424.943-4.773.63-1.348 1.504-2.39 2.625-3.125 1.121-.734 2.417-1.102 3.887-1.102 1.136 0 2.034.19 2.693.568.666.372 1.174.796 1.523 1.273.356.47.632.856.83 1.159h.226v-8.591h2.682V143h-2.59v-2.682h-.319c-.197.318-.477.72-.84 1.205-.364.477-.883.905-1.558 1.284-.674.371-1.572.557-2.693.557zm.364-2.409c1.076 0 1.985-.281 2.727-.841.742-.569 1.307-1.353 1.693-2.353.387-1.007.58-2.17.58-3.488 0-1.303-.19-2.443-.568-3.421-.38-.985-.94-1.75-1.682-2.295-.743-.553-1.66-.83-2.75-.83-1.136 0-2.084.292-2.841.875-.75.576-1.315 1.36-1.693 2.353-.372.984-.557 2.09-.557 3.318 0 1.242.19 2.371.568 3.386.387 1.008.955 1.811 1.705 2.409.757.591 1.697.887 2.818.887zM65.844 149.909c-1.296 0-2.41-.167-3.341-.5-.932-.326-1.709-.757-2.33-1.295-.613-.531-1.102-1.099-1.466-1.705l2.137-1.5c.242.318.549.682.92 1.091.371.417.879.777 1.523 1.08.651.31 1.504.465 2.557.465 1.409 0 2.572-.34 3.488-1.022.917-.682 1.375-1.75 1.375-3.205v-3.545h-.227c-.197.318-.477.712-.84 1.182-.357.462-.872.875-1.546 1.238-.667.356-1.568.534-2.705.534-1.409 0-2.674-.333-3.795-1-1.114-.666-1.997-1.636-2.648-2.909-.644-1.273-.966-2.818-.966-4.636 0-1.788.315-3.345.943-4.671.63-1.333 1.504-2.363 2.625-3.091 1.121-.734 2.417-1.102 3.887-1.102 1.136 0 2.037.19 2.704.568.674.372 1.19.796 1.546 1.273.363.47.644.856.84 1.159h.273v-2.773h2.591V143.5c0 1.5-.34 2.72-1.022 3.659-.675.947-1.584 1.64-2.728 2.08-1.136.447-2.401.67-3.795.67zm-.091-9.591c1.076 0 1.985-.246 2.727-.738.742-.493 1.307-1.201 1.693-2.125.387-.925.58-2.031.58-3.319 0-1.257-.19-2.367-.568-3.329-.38-.962-.94-1.716-1.682-2.262-.743-.545-1.66-.818-2.75-.818-1.136 0-2.084.288-2.841.864-.75.576-1.315 1.348-1.693 2.318-.372.97-.557 2.046-.557 3.227 0 1.212.19 2.284.568 3.216.387.925.955 1.652 1.705 2.182.757.523 1.697.784 2.818.784zM85.617 143.364c-1.682 0-3.133-.372-4.353-1.114-1.212-.75-2.147-1.795-2.807-3.136-.651-1.349-.977-2.917-.977-4.705 0-1.788.326-3.364.977-4.727.66-1.371 1.576-2.44 2.75-3.205 1.182-.772 2.561-1.159 4.137-1.159.909 0 1.807.152 2.693.455a6.67 6.67 0 012.42 1.477c.728.674 1.307 1.568 1.739 2.682.432 1.113.648 2.485.648 4.113v1.137H79.389v-2.318h10.728c0-.985-.198-1.864-.591-2.637a4.456 4.456 0 00-1.66-1.829c-.712-.447-1.553-.671-2.522-.671-1.068 0-1.993.265-2.773.796a5.226 5.226 0 00-1.784 2.045 6.012 6.012 0 00-.625 2.705v1.545c0 1.318.227 2.436.682 3.352.462.91 1.102 1.603 1.92 2.08.818.47 1.77.705 2.853.705.704 0 1.34-.099 1.909-.296a4.073 4.073 0 001.488-.909c.417-.409.739-.917.966-1.523l2.591.728a5.75 5.75 0 01-1.375 2.318c-.644.659-1.44 1.174-2.386 1.545-.947.364-2.012.546-3.194.546zM104.514 125.545v2.273h-9.045v-2.273h9.045zm-6.409-4.181h2.682V138c0 .758.11 1.326.329 1.705.228.371.516.621.864.75.356.121.731.181 1.125.181.296 0 .538-.015.727-.045l.455-.091.545 2.409a5.54 5.54 0 01-.761.205c-.326.075-.739.113-1.239.113-.757 0-1.5-.163-2.227-.488a4.424 4.424 0 01-1.795-1.489c-.47-.667-.705-1.508-.705-2.523v-17.363zM111.605 119.727V143h-2.682v-23.273h2.682zM118.244 149.545c-.454 0-.86-.037-1.216-.113-.356-.068-.602-.137-.738-.205l.682-2.363c.651.166 1.227.227 1.727.181.5-.045.943-.268 1.329-.67.394-.394.754-1.034 1.08-1.92l.5-1.364-6.455-17.546h2.909l4.819 13.91h.181l4.819-13.91h2.909l-7.409 20c-.334.902-.747 1.648-1.239 2.239a4.632 4.632 0 01-1.716 1.33c-.644.288-1.371.431-2.182.431z"
        fill="#1D3777"
      />
      <Path
        d="M119 53.5c0 29.547-23.953 53.5-53.5 53.5S12 83.047 12 53.5 35.953 0 65.5 0 119 23.953 119 53.5z"
        fill="#1D3777"
        fillOpacity={0.05}
      />
      <Path d="M32 45h18v33H32V45z" fill="#D1175E" />
      <Path d="M56 29h18v49H56V29z" fill="#1E84F3" />
      <Path d="M80 45h18v33H80V45z" fill="#F99905" />
    </Svg>
  );
}

export default Icon;
